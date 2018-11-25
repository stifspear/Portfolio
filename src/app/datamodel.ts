export class DataModel {
    static fullName = 'Stif Spear Subba';
    static title = 'Software Developer based in India';
    static aboutMe = 'I am Stif Spear Subba. I am currently working at Amazon as Programmer Analyst. I have prior working' +
    ' experience at a startup. I like to move to new places. Football, Quora, 9GAG, or trying something new in my free time';
    static contactDetails: Object = [
        {
            'data': 'Hyderabad, India',
            'class': 'home-img'
        },
        {
            'data': '+91 7536993270',
            'class': 'phone-img'
        },
        {
            'data': 'stif_spear123@yahoo.com',
            'class': 'email-img'
        }
    ];
    static education: Object = [
        'College with some gpa',
        'School with some percentage',
        'Some other school with percentage'
    ];
    static skills: Object = [
        'Angular',
        'Java',
        'Jasmine',
        'JavaScript',
        'Typescript',
        'Git',
        'HTML',
        'CSS'
    ];
    static experiences: Object = [
        {
            'companyName': 'mroads',
            'desc': 'Delivered robust and efficient feature updates. I work in a team to' +
            'maintain and refactor the current code base and ensure high quality for deliverables.',
        },
        {
            'companyName': 'Amazon',
            'desc': 'Part of carrier integration team responsible for generation of labels'
        }
    ];
    static projects: Object = [
        {
            'id': '0',
            'projectName': 'mroads',
            'desc': 'some project i worked on other than work',
            'tileBackground': '/assets/panna-interview.png',
            'screens': ['/assets/panna-interview.png', '/assets/test-img.png']
        },
        {
            'id': '1',
            'projectName': 'mroads',
            'desc': 'some project i worked on other than school'
        },
        {
            'id': '2',
            'projectName': 'Project 2',
            'desc': 'some project i worked on other than school'
        },
        {
            'id': '3',
            'projectName': 'Project 2',
            'desc': 'some project i worked on other than school'
        },
        {
            'id': '4',
            'projectName': 'Project 2',
            'desc': 'some project i worked on other than school'
        },
        {
            'id': '5',
            'projectName': 'Project 2',
            'desc': 'some project i worked on other than school'
        },
        {
            'id': '6',
            'projectName': 'Project 2',
            'desc': 'some project i worked on other than school'
        }
    ];
}
