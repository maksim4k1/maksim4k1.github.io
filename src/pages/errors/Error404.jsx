import React from "react";
import ErrorDeskription from "../../components/UI/ErrorDeskription";
import ErrorSection from "../../components/UI/ErrorSection";
import ErrorTitle from "../../components/UI/ErrorTitle";

function Error404 () {
  return(
    <main className="content">
      <ErrorSection>
        <ErrorTitle>Error 404</ErrorTitle>
        <ErrorDeskription>Page not found</ErrorDeskription>
      </ErrorSection>
    </main>
  );
}

export default Error404;