import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";
import { Octokit} from "octokit";
import token from "../utils/process.env"


const Home = () => {



    React.useEffect(() => {
        const fetchData = async () => {
            const octokit = new Octokit({
                auth: token
            })
            try {

                const responce = await octokit.request('GET /users/{username}', {
                    username: 'masseriiia',
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                })
                console.log(responce.data)
            } catch (error) {
                console.error("Error:", error)
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