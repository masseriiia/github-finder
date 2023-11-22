import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";
import AppContext from "../components/context";
import ReactPaginate from 'react-paginate';
import Pagination from "../components/Pagination";

const Home = () => {
    const [userData, setUserData] = useState('');
    const [responseRep, seResponseRep] = useState([]);
    const [value, setValue] = useState('');
    const [filteredRepos, setFilteredRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const [reposPerPage] = useState(7)

    useEffect(() => {
        const debounce = setTimeout(async () => {
            try {
                const userResponse = await axios.get(`https://api.github.com/users/${value}`, {
                    headers: {
                        "Accept": "application/vnd.github+json"
                    }
                });
                setUserData(userResponse.data);
            } catch (error) {
                console.log(`User is not found`);
            }

            try {
                const reposResponse = await axios.get(`https://api.github.com/users/${value}/repos`, {
                    headers: {
                        "Accept": "application/vnd.github+json"
                    }
                });
                seResponseRep(reposResponse.data);
            } catch (error) {
                console.log(`User repositories not found`);
            }
        }, 500);

        return () => clearTimeout(debounce);
    }, [value]);

    const contextValue = {
        userData,
        responseRep,
        value,
        setValue,
        setFilteredRepos,
        reposPerPage,
        currentPage,
        setCurrentPage
    };

    return (
        <div className="container-header">
            <AppContext.Provider value={contextValue}>
                <Header />
                <Hero />
            </AppContext.Provider>
        </div>
    );
};

export default Home;
