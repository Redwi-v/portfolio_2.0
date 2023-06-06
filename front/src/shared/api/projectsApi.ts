import axiosConfig from './axiosConfig';

class ProjectApi {
    async getProjectsPage() {
        return axiosConfig.get('works');
    }

    async createProject(data: any) {
        await axiosConfig.post('/projects', { hello: 'hello' });
    }
}

export default new ProjectApi();
