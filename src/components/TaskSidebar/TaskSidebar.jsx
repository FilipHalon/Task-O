import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecentTask from '../TaskPreview/RecentTask';
import { Div, Input, H2, Ul, Li, StyledIcon, Aside } from './StyledTaskSidebar';

export default () => {
    const [recentTasks, setRecentTasks] = useState([]);

    const handleSearch = e => {
        setRecentTasks(e.target.value);
    }

    return (
        <Aside>
            <Div isSearchArea>
                <StyledIcon icon={faSearch} />
                <Input type="text" placeholder="Wyszukaj" onChange={handleSearch}/>
            </Div>
            <Div><H2>Ostatnie zadania</H2></Div>
            <Ul>
                <Li><RecentTask /></Li>
                <Li><RecentTask /></Li>
            </Ul>
        </Aside>
    )
}
