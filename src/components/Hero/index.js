import React from 'react';
import AppContext from "../../components/context";
import Style from "./Hero.module.scss"

const Hero = () => {
    const {userData, reposData} = React.useContext(AppContext)

    console.log(userData.repos_url)
    return (
        <section className={Style.hero}>
            <div className={Style.heroWrapper}>
                <div className={Style.heroInfo}>
                    <img className={Style.heroAvatar} src={userData.avatar_url} alt=""/>
                    <h4 className={Style.heroName}>{userData.name}</h4>
                    <p className={Style.heroLogin}>{userData.login}</p>
                    <p className={Style.heroBio}>{userData.bio}</p>
                    <div className={Style.heroFollow}>
                        <div className={Style.heroFollowDesc}>
                            <p>{userData.followers}</p>
                            <p>followers</p>
                        </div>
                        <div className={Style.heroFollowDesc}>
                            <p>{userData.following}</p>
                            <p>following</p>
                        </div>
                    </div>
                    <p>{userData.location}</p>
                    <p>{userData.email}</p>
                    <p>{userData.blog}</p>
                </div>
                <div className={Style.heroRepositories}>
                    <h2 className={Style.heroTitle}>Repositories ({userData.public_repos})</h2>
                    <div className={Style.heroRepositoresItems}>
                        {
                            reposData.map((item, index) => (
                                <div key={index} className={Style.heroRepositor}>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
