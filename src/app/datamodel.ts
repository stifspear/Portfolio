export class DataModel {
    static fullName = 'Stif Spear Subba';
    static title = 'Software Developer';
    static aboutMe = 'I am Stif Spear Subba. I am currently working at Amazon as Programmer Analyst. I have prior working' +
    ' experience at a startup m. I like to move to new places. Football, Quora, 9GAG, or trying something new in my free time';
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
            'projectName': 'Project 1',
            'desc': 'some project i worked on other than work'
        },
        {
            'projectName': 'Project 2',
            'desc': 'some project i worked on other than school'
        }
    ];
}
