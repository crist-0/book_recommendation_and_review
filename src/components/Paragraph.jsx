const Paragraph = () => {
    return (
      <>
        <div className="bg-gray-900 p-6 lg:p-16 md:p-14">
          <div className="bg-gray-800 p-6 lg:p-8 md:p-7 rounded-lg shadow-lg">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-white mb-6">
              Empower Your IT and Operations Teams
            </h2>
            
            {/* Paragraphs */}
            <p className="mb-5 text-lg leading-relaxed text-gray-400">
              Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Paragraph;
  