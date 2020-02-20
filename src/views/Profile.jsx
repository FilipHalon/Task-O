import React from 'react';
import TaskSidebar from "../components/TaskSidebar";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faSearch } from '@fortawesome/free-solid-svg-icons';

export default props => {
    const isDeveloperAccount = props.accountType === "developer"

    return (
        <React.Fragment>
            <TaskSidebar/>
            <section className="task-description">
                <div className="task-description">
                    <div className="task-area">
                        <Link to="/tasks">
                            <div className="profile-action"><span><FontAwesomeIcon icon={faSearch} /></span><span>Przeglądaj zadania</span></div>
                        </Link>
                        {!isDeveloperAccount &&
                        <Link to="/new-task-add">
                            <div className="profile-action"><span><FontAwesomeIcon icon={faTasks} /></span><span>Dodaj zadanie</span></div>
                        </Link>
                        }
                        <Link to="/">
                            <div className="profile-action"><span><FontAwesomeIcon icon={faSearch} /></span><span>Zobacz rozwiązania</span></div>
                        </Link>
                        {!isDeveloperAccount && 
                        <Link to="/this-profile-tasks">
                            <div className="profile-action"><span><FontAwesomeIcon icon={faSearch} /></span><span>Zobacz wstawione zadania</span></div>
                        </Link>
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
