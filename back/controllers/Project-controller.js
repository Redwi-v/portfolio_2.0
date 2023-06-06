const ApiError = require('../exceptions/api-error');
const ProjectService = require('../service/ProjectService');

class ProjectController {
    async getProject(req, res, next) {
        try {
            const projectId = req.query.projectId;
            const project = await ProjectService.getProjectById(projectId);

            if (!project) {
                throw ApiError.BadRequest('Проект не найден');
            }

            res.json(project);
        } catch (error) {
            next(error);
        }
    }

    async createProject(req, res, next) {
        try {
            const newProjectData = req.body;
            const newProjectFiles = req.files;
            const newProject = await ProjectService.createProject(newProjectData, newProjectFiles);
            res.json(newProject);
        } catch (error) {
            next(error);
        }
    }

    async deleteProjectById(req, res, next) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async updateProject(req, res, next) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async getProjectsList(req, res, next) {
        try {
            const { limit, page, ...searchParams } = req.body;
            const projectList = await ProjectService.getProjectsPage(page, limit, searchParams);

            return res.json(projectList);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProjectController();
