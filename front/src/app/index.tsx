import './styles/index.scss';
import { withProviders } from './providers/index';
import Routing from 'pages';
import React from 'react';

import projectsApi from 'shared/api/projectsApi';

function App() {
    const [imageSrc, setImageSrc] = React.useState('');

    const file = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const file = e.target.files[0];

        console.log(file);

        const formData = new FormData();

        formData.append('file', file);
        formData.append('file1', 'file1');

        console.log(formData);

        console.log(formData.has('file'));

        projectsApi.createProject(formData);
    };

    React.useEffect(() => {
        console.log(imageSrc);
    }, [imageSrc]);

    return (
        <div className="App">
            <h1>hi</h1>

            <input type="file" onChange={file} accept=".jpg, .jpeg, .png" />
            <img src={imageSrc} alt="" />

            <Routing />
        </div>
    );
}

export default withProviders(App);
