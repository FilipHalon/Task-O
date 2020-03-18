import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecentTask from '../TaskPreview/RecentTask';
import { Section, Div, Input, H3, Ul, Li, StyledIcon } from './StyledTaskSidebar';

export default () => {
    const [recentTasks, setRecentTasks] = useState([]);

    const handleSearch = e => {
        setRecentTasks(e.target.value);
    }

    return (
        <Section>
            <Div isSearchArea>
                <StyledIcon icon={faSearch} />
                <Input type="text" placeholder="Wyszukaj" onChange={handleSearch}/>
            </Div>
            <Div><H3>Ostatnie zadania</H3></Div>
            <Ul>
                <Li><RecentTask /></Li>
                <Li><RecentTask /></Li>
            </Ul>
        </Section>
    )
}
