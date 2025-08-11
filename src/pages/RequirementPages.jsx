import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { FaArrowLeft, FaArrowRight, FaDownload } from 'react-icons/fa';
import samplePdfUrl from "../assets/pdf_file/requirement.pdf"

// Set the workerSrc for pdf.js to a reliable CDN URL.
// We are using a hardcoded, stable version from unpkg to prevent 404 errors.
// The .mjs extension is used as requested.
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.mjs`;

// The main PDF viewer component
const RequirementPages = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // This function is called when the PDF document successfully loads.
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setIsLoading(false); // Hide the loading indicator once the document is ready
  };

  // Event handler for navigation buttons.
  const goToPrevPage = () => setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  const goToNextPage = () => setPageNumber(prevPage => Math.min(prevPage + 1, numPages));

  return (
    <div className="bg-gray-100 flex flex-col items-center p-8 min-h-screen font-sans antialiased mt-20">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full text-center">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-6">PDF Viewer</h1>
        
        {/* Conditional rendering for the loading state */}
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* This div adds horizontal scroll for responsiveness */}
        <div className="border border-gray-300 p-4 rounded-lg overflow-x-auto">
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

        {/* Navigation and Download controls */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
          {/* Previous Page Button */}
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous Page"
          >
            <FaArrowLeft />
          </button>
          
          {/* Page Number Display */}
          <p className="text-lg font-semibold text-gray-700">
            Page {pageNumber} of {numPages || '...'}
          </p>
          
          {/* Next Page Button */}
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next Page"
          >
            <FaArrowRight />
          </button>

          {/* Download Button */}
          <a
            href={samplePdfUrl}
            download="requirement_file.pdf"
            className="flex items-center space-x-2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <FaDownload />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RequirementPages;
