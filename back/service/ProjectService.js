const { json } = require('express');
const project_model = require('../models/project_model');
const fileService = require('./FileService');

class ProjectService {
    async createProject({ title, text, tags, siteLink, demoLink, gitHubLink, createdDate }, files) {
        const tagsArray = tags.split(',');

        const imagesLinks = [];
        let previewImageLink;

        for (let fileName in files) {
            const imageLink = fileService.saveFile(files[fileName]);
            imagesLinks.push(imageLink);

            if (fileName === 'preview') {
                previewImageLink = imageLink;
            }
        }
        const createdProject = await project_model.create({
            title,
            text,
            tags: tagsArray,
            siteLink,
            demoLink,
            gitHubLink,
            createdDate,
            previewImage: previewImageLink,
            images: imagesLinks,
        });

        return createdProject;
    }

    async getProjectsPage(page, limit, searchParams) {
        page = page || 1;
        limit = limit || 9;

        let offset = page * limit - limit;
        let projectPage = [];
        const totalCount = await project_model.countDocuments();

        if (!Object.keys(searchParams).length) {
            const selectProjects = await project_model.find().skip(offset).limit(limit);
            projectPage = selectProjects;
        }

        // если поиск по id сразу возвращаем
        if (searchParams.id) {
            projectPage = await project_model.findById(searchParams.id);
            return { data: projectPage, totalCount };
        }

        if (searchParams.title && !searchParams.tags) {
            const selectTitleProjects = await project_model
                .find({ title: new RegExp(searchParams.title) })
                .skip(offset)
                .limit(limit);

            projectPage = selectTitleProjects;
        }

        if (searchParams.title && searchParams.tags) {
            const selectTitleProjects = await project_model
                .find({ title: new RegExp(searchParams.title) })
                .find({ tags: { $in: searchParams.tags } })
                .skip(offset)
                .limit(limit);

            projectPage = selectTitleProjects;
        }

        return { data: projectPage, totalCount };
    }
}

module.exports = new ProjectService();
