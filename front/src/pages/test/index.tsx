import React, { FC } from 'react';

interface TestProps {}
const Test: FC<TestProps> = (props) => {
    const {} = props;
    return (
        <div>
            <h1>test</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolorum minima iure illum consequuntur, odit,
                rerum maiores molestias nihil expedita praesentium porro architecto in necessitatibus, nobis aspernatur officiis
                animi alias?
            </p>
        </div>
    );
};

export default Test;
