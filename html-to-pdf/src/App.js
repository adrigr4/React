import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Button } from 'react-bootstrap';
// import PrintButton from "./components/PrintButton";

// import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Quixote from './components/react-pdf';
import PopUp from './components/pop-up';
import PdfTest from './components/react-pdf';

const App = () => (
	<PDFViewer style={{ height: '749px', width: '100%' }}>
		<PdfTest />
	</PDFViewer>
);

export default App;
