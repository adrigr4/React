import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('myMm').offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById('myMm').offsetHeight*mm;
};

const range = (start, end) => {
    return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
};


const PrintButton = ({id, label}) => (<div>
  {/*
    Getting pixel height in milimeters:
    https://stackoverflow.com/questions/7650413/pixel-to-mm-equation/27111621#27111621
  */}
  <div id="myMm" style={{height: "1mm"}} />

  <div
    className="btn btn-warning"
    onClick={() => {
      const input = document.getElementById(id);
      const inputHeightMm = pxToMm(input.offsetHeight);
      const inputWidthMm = pxToMm(input.offsetWidth);
      const a4WidthMm = 210;
      const a4HeightMm = 297; 
      const a4HeightPx = mmToPx(a4HeightMm); 
      const numPages = 1;
      console.log({
        input, inputHeightMm, inputWidthMm, a4HeightMm, a4HeightPx, numPages, range: range(0, numPages), 
        comp: inputHeightMm <= a4HeightMm, inputHeightPx: input.offsetHeight, inputWidthPx: input.offsetWidth
      });
        

      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          
          const pdf = new jsPDF();
          // Document of a4WidthMm wide and inputHeightMm high
          if (inputHeightMm > a4HeightMm) {
            // elongated a4 (system print dialog will handle page breaks)
            pdf = new jsPDF('p', 'mm', [inputHeightMm+16, a4WidthMm]);
          }
          
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save(`${id}.pdf`);
        });
      ;      
    }}
  >
    {label}
  </div>
</div>);

export default PrintButton;