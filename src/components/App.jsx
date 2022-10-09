import ProfileCard from './ProfileCard/ProfileCard';
import user from '../json/user.json'
import statistic from '../json/statistic.json'
import friends from '../json/friends.json'
import transactions from '../json/transactions.json'
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Section
        title='Task 1. Profile'
      >
        <ProfileCard
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section
        title='Task 2. Statistics'
      >
        <Statistic
          statisticList={statistic}
        />
      </Section>

      <Section
        title='Task 3. Friend list'
      >
        <FriendList
          friends={friends}
        />
      </Section>

      <Section
        title='Task 4. Transaction history'
      >
        <TransactionHistory
          items={transactions}
        />
      </Section>
    </>
  );
};