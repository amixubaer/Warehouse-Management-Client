import React from "react";
import { Accordion, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container vh-100">
      <Row>
        <div className="mt-5">
          <h2 className="my-5">Question and answer section</h2>
          <div>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5 className="p-0 m-0 text-danger">
                    Difference between javascript and node js?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                1. JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                <br/> 
                2. JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.
                <br />
                3. JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.
                <br />
                4. JavaScript is normally following Java Programming language standard. There may have some different way of writing code, but at the same time, we can say it following the Java Programming language standard. Whereas node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.
                <br />
                5. For accessing any operating system, specific non-blocking task JavaScript has some specific object, but all of them are operating system specific. An example is ActiveX Control which is only running in Windows. But Node JS is given utility to run some operating system specific non-blocking tasks from any JavaScript programming. It doesn’t have any operating system specific constant. Node JS is very much familiar to create a specific binding with the file system and allows the developer to read or sometimes write on disk.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h5 className="p-0 m-0 text-danger">
                    Differences between Sql and NoSql databases?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  1. Sql is a relational database management system (RDBMS) and
                  NoSql is a non-relational or distributed database system.
                  <br />
                  2. Sql databases have fixed or static or predefined schema and
                  NoSql have dynamic schema.
                  <br />
                  3. Sql databases are not suited for hierarchical data storage
                  on the other hand NoSql databases are best suited for
                  hierarchical data storage.
                  <br />
                  4. Sql database is Vertically Scalable and NoSql database is
                  Horizontally scalable.
                  <br />
                  5. Sql database follows ACID property and NoSql follows
                  CAP(consistency, availability, partition tolerance).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h5 className="p-0 m-0 text-danger">
                    When should you use nodejs and when should you use mongodb?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We should use Nodejs when any project needs a programming
                    environment and a runtime library that offers you basic
                    programming tools/support and can compile and/or interpret
                    your code. Nodejs is such as tool for the Javascript
                    programming language.
                  </p>
                  <p>
                    MongoDB is a database engine which should use MongoDB when
                    any application needs the ability to persistently store data
                    in a way that you can efficiently query or update it later,
                    then you would typically use some form of database. There
                    are dozens of popular databases. MongoDB is one such
                    database.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h5 className="p-0 m-0 text-danger">
                    What is the purpose of JWT and how it works?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                  JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.


                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Blog;