import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";
import AppContext from "../components/context";

const Home = () => {
    const [userData, setUserData] = React.useState('')
    const [reposData, setReposData] = React.useState([])
    const [data, setData] = React.useState('')

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/maxguuse`, {
                    headers: {
                      "Accept": "application/vnd.github+json"
                  }
                })
                setUserData(response.data)
            } catch (error) {
                console.log(`User is not found`)
            }
        }
        const fetchRepositories = async () => {
            const response = await axios.get(`https://api.github.com/users/maxguuse/repos`, {
                headers: {
                    "Accept": "application/vnd.github+json"
                }
            })
            const repos = response.data
            setReposData(repos)
        }
        fetchData()
        fetchRepositories()
    },[])

    const handleInputChange = (e) => {
        setData(e.target.value)
    }

    const contextValue = {
        userData,
        reposData,
        data,
        setData,
        handleInputChange
    };

    return (
        <div className="container-header">
            <Header/>
            <AppContext.Provider value={contextValue}>
                <Hero/>
            </AppContext.Provider>
        </div>
    );
};

export default Home;