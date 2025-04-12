import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import Header from '../src/componets/Header';
import Container from '../src/componets/Container';



const HeaderDiv = document.getElementById('header');
const ContainerDiv = document.getElementById('container');







createRoot(HeaderDiv).render(
    <StrictMode>
        <Header />
    </StrictMode>
);



createRoot(ContainerDiv).render(
    <StrictMode>
        <Container />
    </StrictMode>
);