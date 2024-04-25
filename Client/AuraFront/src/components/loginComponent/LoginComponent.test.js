import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useUserHandler } from '../../handler/AuthHandler';
import{AuthHandler}  from '../../handler/AuthHandler'
import LoginComponent from './LoginComponent'; // Asegúrate de importar correctamente tu componente LoginComponent