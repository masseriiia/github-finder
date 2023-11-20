import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";
import { Octokit } from "@octokit/rest";



const Home = () => {

    React.useEffect(() => {
        const fetchData = async () => {
            const octokit = new Octokit({
                auth: process.env.REACT_APP_GITHUB_TOKEN
            })
            try {
                await octokit.request("GET /user/starred/{owner}/{repo}", {
                    owner: "github",
                    repo: "docs",
                    headers: {
                        "x-github-api-version": "2022-11-28",
                    },
                });

                console.log(`The repository is starred by me`);

            } catch (error) {
                if (error.status === 404) {
                    console.log(`The repository is not starred by me`);
                } else {
                    console.error(`An error occurred while checking if the repository is starred: ${error?.response?.data?.message}`);
                }
            }
        }
        fetchData()
    },[])

    return (
        <div className="container-header">
            <Header/>
            <Hero/>
        </div>
    );
};

export default Home;