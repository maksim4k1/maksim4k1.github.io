import React from "react";
import Contacts from "../../components/Contacts";
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
      <Contacts/>
    </main>
  );
}

export default Error404;