import React from "react";
import {
    FaHtml5,
    FaPython,
    FaJava,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGithub,
} from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import {
    SiMysql,
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiCplusplus,
    SiCoursera,
} from "react-icons/si";
import Softskills from "./Softskills";
import Technicalskills from "./Technicalskills";
export default function Skills() {
    return (
        <div
            className="container text-center"
            style={{ marginTop: "150px", marginBottom: "20px" }}
        >
            <h2 style={{ color: "yellowgreen" }}>Technical Skills</h2>
            <h5>
                My technical skills are extensive and cover a wide range of programming
                languages, software tools, and technologies, making me a valuable asset
                to any organization's development team.
            </h5>
            <Technicalskills
                color1="#e34c26"
                title1="HTML"
                information1="The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser."
                icon1={FaHtml5}
                color2="#264de4"
                title2="CSS"
                information2="Cascading Style Sheets is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML or XML."
                icon2={FaCss3Alt}
                color3="yellow"
                title3="Javascript"
                information3="JavaScript, often abbreviated as JS, is a programming language
        that is one of the core technologies of the World Wide Web,
        alongside HTML and CSS."
                icon3={SiJavascript}
            />
            <Technicalskills
                color1="#5468ff"
                title1="Bootstrap"
                information1="Bootstrap is a free and open-source CSS framework directed at
        responsive, mobile-first front-end web development."
                icon1={FaBootstrap}
                color2="#61dbfb"
                title2="React JS"
                information2="React is a free and open-source front-end JavaScript library for
        building user interfaces based on components."
                icon2={FaReact}
                color3="#3c873a"
                title3="Node JS"
                information3="Node.js is a cross-platform, open-source server environment that
        can run on Windows, Linux, Unix, macOS, and more. Node.js is a
        back-end JavaScript runtime environment, runs on the V8
        JavaScript Engine, and executes JavaScript code outside a web
        browser."
                icon3={FaNodeJs}
            />
            <Technicalskills
                color1="#000"
                title1="Express JS"
                information1="Express.js, or simply Express, is a back end web application
        framework for building RESTful APIs with Node.js. It is designed
        for building web applications and APIs."
                icon1={SiExpress}
                color2="#589636"
                title2="MongoDB"
                information2="MongoDB is a source-available cross-platform document-oriented
        database program developed by Alfons Kemper. Classified as a
        NoSQL database program, MongoDB uses JSON-like documents with
        optional schemas."
                icon2={SiMongodb}
                color3="#00758f"
                title3="MySQL"
                information3="MySQL is an open-source relational database management system."
                icon3={SiMysql}
            />
            <Technicalskills
                color1="#e34c26"
                title1="Git"
                information1="Git is a distributed version control system that tracks changes
        in any set of computer files, usually used for coordinating work
        among programmers collaboratively developing source code during
        software development. Its goals include speed, data integrity,
        and support for distributed, non-linear workflows."
                icon1={BsGit}
                color2="#fff"
                title2="Github"
                information2=" GitHub, Inc. is an Internet hosting service for software
        development and version control using Git. It provides the
        distributed version control of Git plus access control, bug
        tracking, software feature requests, task management, continuous
        integration, and wikis for every project."
                icon2={FaGithub}
                color3="#61dbfb"
                title3="React Native"
                information3="React Native is an open-source UI software framework created by
        Meta Platforms, Inc. It is used to develop applications for
        Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by
        enabling developers to use the React framework along with native
        platform capabilities."
                icon3={FaReact}
            />
            <Technicalskills
                color1="#283593"
                title1="C"
                information1="The C programming language is a procedural and general-purpose
        language that provides low-level access to system memory. A
        program written in C must be run through a C compiler to convert
        it into an executable that a computer can run."
                icon1={SiCoursera}
                color2="#044F88"
                title2="C++"
                information2="C++ (or “C-plus-plus”) is a general-purpose programming and
        coding language. C++ is used in developing browsers, operating
        systems, and applications, as well as in-game programming,
        software engineering, data structures, etc."
                icon2={SiCplusplus}
                color3="#e34c26"
                title3="Java"
                information3="Java is a high-level, class-based, object-oriented programming
        language that is designed to have as few implementation
        dependencies as possible."
                icon3={FaJava}
            />
            <Technicalskills
                color1="yellow"
                title1="Python"
                information1="Python is a high-level, general-purpose programming language.
        Its design philosophy emphasizes code readability with the use
        of significant indentation via the off-side rule. Python is
        dynamically typed and garbage-collected."
                icon1={FaPython}
            />
            <h2 style={{ color: "yellowgreen", marginBottom: "20px",marginTop:"100px" }}>
                Soft Skills
            </h2>
            <Softskills
                softskills1="Communication skills"
                softskills2="Collaboration skills"
                softskills3="Adaptability"
            />
            <Softskills
                softskills1="Creativity"
                softskills2="Time management"
                softskills3="Critical thinking"
            />
            <Softskills
                softskills1="Emotional intelligence"
                softskills2="Problem-solving"
                softskills3="Teamwork"
            />
        </div>
    );
}
