import React, { FC } from 'react';

interface HomeProps {}
const Home: FC<HomeProps> = (props) => {
    const {} = props;
    return (
        <div>
            <h1>home</h1>
            <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit inventore nulla, voluptas atque laborum
                consequatur temporibus libero! Rem laboriosam modi voluptatem incidunt molestias temporibus libero, labore magni,
                dolore unde animi.
            </span>
        </div>
    );
};

export default Home;
