import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import samplePdfUrl from "../assets/pdf_file/requirement.pdf"

// Set the workerSrc for pdf.js to load the PDF rendering logic.
// This is a necessary step for react-pdf to work correctly.
// A common issue is forgetting this line.
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// The main PDF viewer component
const RequirementPages = () => {
    
  // State to hold the number of pages in the PDF.
  const [numPages, setNumPages] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  
  // State to track the current page number being displayed.
  const [pageNumber, setPageNumber] = useState(1);

  // Function that is called when the PDF document is loaded.
  // It gets the total number of pages and sets the state.
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Reset to the first page on new document load
  };

  // Functions to navigate between pages.
  const goToPrevPage = () => setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  const goToNextPage = () => setPageNumber(prevPage => Math.min(prevPage + 1, numPages));

   return (
    <div className="bg-gray-100 flex flex-col items-center p-8 min-h-screen font-sans antialiased mt-20">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full text-center">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-6">PDF Viewer</h1>
        
        <div className="border border-gray-300 p-4 rounded-lg overflow-hidden">
          {isLoading && <p className="text-gray-500 italic">Loading PDF...</p>}
          <Document
            file={samplePdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            className="w-full"
          >
            <Page
              pageNumber={pageNumber}
              renderAnnotationLayer={true}
              renderTextLayer={true}
              className="w-full"
            />
          </Document>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous Page"
          >
            <FaArrowLeft />
          </button>
          
          <p className="text-lg font-semibold text-gray-700">
            Page {pageNumber} of {numPages || '...'}
          </p>
          
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next Page"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequirementPages;
