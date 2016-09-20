import { Project } from './project';

export const PROJECTS: Project[] = [
    { id: 1, 
      name: 'Mercury-Redstone 3', 
      personnel: ['Alan Shepard'],
      mission_date: 'May 5, 1961', 
      assets: [
          {
              type: 'launch vehicle',
              name: 'Mercury-Redstone'
          },
          {
              type: 'spacecraft',
              name: 'Freedom 7'
          }
      ]
    },
    { id: 2, 
      name: 'Mercury-Redstone 4', 
      personnel: ['Virgil Grissom'],
      mission_date: 'July 21, 1961', 
      assets: [
          {
              type: 'launch vehicle',
              name: 'Mercury-Redstone'
          },
          {
              type: 'spacecraft',
              name: 'Liberty Bell 7'
          }
      ]
    },
    { id: 3, 
      name: 'Mercury-Atlas 6', 
      personnel: ['John Glenn'],
      mission_date: 'Feb 20, 1962', 
      assets: [
          {
              type: 'launch vehicle',
              name: 'Atlas D'
          },
          {
              type: 'spacecraft',
              name: 'Liberty Bell 7'
          }
      ]
    },
    { id: 4, 
      name: 'Mercury-Atlas 7', 
      personnel: ['Scott Carpenter'],
      mission_date: 'May 24, 1962', 
      assets: [
          {
              type: 'launch vehicle',
              name: 'Atlas D'
          },
          {
              type: 'spacecraft',
              name: 'Aurora 7'
          }
      ]
    },
    { id: 5, 
      name: 'Mercury-Atlas 8', 
      personnel: ['Walter Schirra'],
      mission_date: 'Oct 3, 1962', 
      assets: [
          {
              type: 'launch vehicle',
              name: 'Atlas D'
          },
          {
              type: 'spacecraft',
              name: 'Sigma 7'
          }
      ]
    },
    { id: 6, 
      name: 'Mercury-Atlas 9', 
      personnel: ['Gordon Cooper'],
      mission_date: 'May 15, 1963', 
      assets: [
          {
              type: 'launch vehicle',
              name: 'Atlas D'
          },
          {
              type: 'spacecraft',
              name: 'Faith 7'
          }
      ]
    },
];