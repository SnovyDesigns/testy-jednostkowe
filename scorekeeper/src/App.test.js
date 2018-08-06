import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antoś',
      score: 0
    }
  ];

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find('PlayersList').prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state('players');
  expect(playersAfterUpdate[0].score).toEqual(10);
});

it('should call onPlayerAdd and add new player', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find('AddPlayer').prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});

it('should call PlayerRemove and delete player', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antoś',
      score: 0
    }
  ];

  appComponent.setState({ players });

  const playerRemove = appComponent.find('PlayersList').prop('PlayerRemove');
  playerRemove(0);

  const appPlayers = appComponent.state('players');

  expect(appPlayers.length).toEqual(1);
});
