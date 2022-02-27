import * as sensitive from '../config.json'
export const Config = {
  ...sensitive,
  guild: '399688888739692552',
  adminRoles: [
    {
      id: '921540578062270504',
      name: 'Founder'
    },
    {
      id: '947278771491340389',
      name: 'Co-Owner'
    },
    {
      id: '927712204315303986',
      name: 'Designer'
    },
    {
      id: '481283540965916682',
      name: 'Developer'
    },
    {
      id: '825467458281537556',
      name: 'Communication Director'
    },
    {
      id: '623847890628116504',
      name: 'Admin'
    },
    {
      id: '623847631566798868',
      name: 'Support Team'
    }
  ],
  adminJoined: {
    '142408079177285632': '12/23/2017',
    '286166184402092042': '6/30/2021',
    '209735985158815744': '9/30/2019',
    '467593308839870475': '10/21/2018',
    '601784957664493608': '3/19/2020',
    '507444005030854656': '7/20/2020',
    '504403145989029890': '6/30/2021',
    '277183033344524288': '6/7/2021',
    '541763812676861952': '12/17/2021',
    '359794248570109972': '10/1/2019',
    '516485037596606475': '12/18/2021',
    '443171327378063361': '12/22/2021',
    '879980781240451122': '6/30/2021'
  },
  premium: {
    '617037486719238185': 3, // patron
    '798800694303260703': 3, // super supporter
    '621810419643973642': 1, // booster
    '651523919962177546': 1, // premium
    '623847631566798868': 2, // support team
    '415323805943070721': 10, // staff
    '623847890628116504': 99, // head helper
    '798393980495724564': 1000000 // million servers
  },
  premiumRole: '855880100443979828',
  channels: {
    status: '630876009943793694',
    support: '708149822288298138',
    general: '401407031875076098',
    voterLog: '559080414262722571',
    premiumChat: '651520865455833094'
  },
  emojis: {
    offline: '681457517775290554',
    monitoring: '681457749691072568',
    resolved: '681457750714089492'
  },
  voter: [
    ["559081097271443479", 20], // voter
    ["559086971725807636", 50], // real voter
    ["566379442407079965", 100], // frequent voter
    ["746944789005467708", 300], // extreme voter
    ["573994950237093899", 10000000000000] // placeholder
  ]
}
