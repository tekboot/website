import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../data/Project';

@Component({
  selector: 'app-career-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career-details.component.html',
  styleUrl: './career-details.component.scss'
})
export class CareerDetailsComponent {

  project: Project| undefined;

  private projects = [
    {
      name: 'FerryBox',
      description:
        'Developed a dynamic web solution for visualizing, exploring, and analyzing Mediterranean surface water data collected by the National Institute of Marine Technologies (INSTM) in Tunisia.',
      roles: ['Data Analyst', 'Web Developer'],
      missions: [
        'Collected data and automated data integration processes.',
        'Standardized pre-treatments and ensured quality control.',
        'Documented processes and ensured continuity using batch files.',
        'Built a dynamic web application for data querying and graphical representation.',
        'Developed an admin board for data export/import and sharing with international communities.',
      ],
      technologies: [
        'Python',
        'Django Framework',
        'JavaScript',
        'Leaflet',
        'Highcharts',
        'PostgreSQL',
        'Jupyter Notebook',
      ],
      achievements: [
        'Automated and standardized data pre-treatments and quality control.',
        'Created scientifically exploitable visualizations for Mediterranean surface water parameters.',
        'Developed a time-series creation process and applied data classification using K-means.',
        'Promising results contributed to scientific articles.',
      ],
      backgrounds:
        ['Leveraged my hydraulics engineering background, passion for programming, and willingness to learn new tools and concepts to deliver on all project requirements successfully.',
          'other',
          'other'],
          steps:
          ['Leveraged my hydraulics engineering background, passion for programming, and willingness to learn new tools and concepts to deliver on all project requirements successfully.',
            'other',
            'other'],
        relatedTopics: [
          { title: 'Create a Friendbook Account', link: '/create-account' },
          { title: 'Verify Your Account', link: '/verify-account' },
          { title: 'Recover Your Friendbook Account', link: '/recover-account' },
          { title: 'Control Ad Preferences', link: '/control-ads' },
          { title: 'Set Up Two-Factor Authentication', link: '/setup-2fa' },
        ],
    },
    {
      name: 'TT',
      description:
        'Developed a dynamic web solution for visualizing, exploring, and analyzing Mediterranean surface water data collected by the National Institute of Marine Technologies (INSTM) in Tunisia.',
      roles: ['Data Analyst', 'Web Developer'],
      missions: [
        'Collected data and automated data integration processes.',
        'Standardized pre-treatments and ensured quality control.',
        'Documented processes and ensured continuity using batch files.',
        'Built a dynamic web application for data querying and graphical representation.',
        'Developed an admin board for data export/import and sharing with international communities.',
      ],
      technologies: [
        'Python',
        'Django Framework',
        'JavaScript',
        'Leaflet',
        'Highcharts',
        'PostgreSQL',
        'Jupyter Notebook',
      ],
      achievements: [
        'Automated and standardized data pre-treatments and quality control.',
        'Created scientifically exploitable visualizations for Mediterranean surface water parameters.',
        'Developed a time-series creation process and applied data classification using K-means.',
        'Promising results contributed to scientific articles.',
      ],
      backgrounds:
        ['Leveraged my hydraulics engineering background, passion for programming, and willingness to learn new tools and concepts to deliver on all project requirements successfully.',
          'other',
          'other'],
          steps:
          ['Leveraged my hydraulics engineering background, passion for programming, and willingness to learn new tools and concepts to deliver on all project requirements successfully.',
            'other',
            'other'],
        relatedTopics: [
          { title: 'Create a Friendbook Account', link: '/create-account' },
          { title: 'Verify Your Account', link: '/verify-account' },
          { title: 'Recover Your Friendbook Account', link: '/recover-account' },
          { title: 'Control Ad Preferences', link: '/control-ads' },
          { title: 'Set Up Two-Factor Authentication', link: '/setup-2fa' },
        ],
    },    {
      name: 'TeamTool',
      description:
        'Developed a dynamic web solution for visualizing, exploring, and analyzing Mediterranean surface water data collected by the National Institute of Marine Technologies (INSTM) in Tunisia.',
      roles: ['Data Analyst', 'Web Developer'],
      missions: [
        'Collected data and automated data integration processes.',
        'Standardized pre-treatments and ensured quality control.',
        'Documented processes and ensured continuity using batch files.',
        'Built a dynamic web application for data querying and graphical representation.',
        'Developed an admin board for data export/import and sharing with international communities.',
      ],
      technologies: [
        'Python',
        'Django Framework',
        'JavaScript',
        'Leaflet',
        'Highcharts',
        'PostgreSQL',
        'Jupyter Notebook',
      ],
      achievements: [
        'Automated and standardized data pre-treatments and quality control.',
        'Created scientifically exploitable visualizations for Mediterranean surface water parameters.',
        'Developed a time-series creation process and applied data classification using K-means.',
        'Promising results contributed to scientific articles.',
      ],
      backgrounds:
        ['Leveraged my hydraulics engineering background, passion for programming, and willingness to learn new tools and concepts to deliver on all project requirements successfully.',
          'other',
          'other'],
          steps:
          ['Leveraged my hydraulics engineering background, passion for programming, and willingness to learn new tools and concepts to deliver on all project requirements successfully.',
            'other',
            'other'],
        relatedTopics: [
          { title: 'Create a Friendbook Account', link: '/create-account' },
          { title: 'Verify Your Account', link: '/verify-account' },
          { title: 'Recover Your Friendbook Account', link: '/recover-account' },
          { title: 'Control Ad Preferences', link: '/control-ads' },
          { title: 'Set Up Two-Factor Authentication', link: '/setup-2fa' },
        ],
},    {
      name: 'Teams',
      description:
        'Developed a dynamic web solution for visualizing, exploring, and analyzing Mediterranean surface water data collected by the National Institute of Marine Technologies (INSTM) in Tunisia.',
      roles: ['Data Analyst', 'Web Developer'],
      missions: [
        'Collected data and automated data integration processes.',
        'Standardized pre-treatments and ensured quality control.',
        'Documented processes and ensured continuity using batch files.',
        'Built a dynamic web application for data querying and graphical representation.',
        'Developed an admin board for data export/import and sharing with international communities.',
      ],
      technologies: [
        'Python',
        'Django Framework',
        'JavaScript',
        'Leaflet',
        'Highcharts',
        'PostgreSQL',
        'Jupyter Notebook',
      ],
      achievements: [
        'Automated and standardized data pre-treatments and quality control.',
        'Created scientifically exploitable visualizations for Mediterranean surface water parameters.',
        'Developed a time-series creation process and applied data classification using K-means.',
        'Promising results contributed to scientific articles.',
      ],
      backgrounds:
        ['Leveraged my hydraulics engineering background, passion for programming, and willingness to learn new tools and concepts to deliver on all project requirements successfully.',
          'other',
          'other'],
          steps:
          ['Leveraged my hydraulics engineering background, passion for programming, and willingness to learn new tools and concepts to deliver on all project requirements successfully.',
            'other',
            'other'],
        relatedTopics: [
          { title: 'Create a Friendbook Account', link: '/create-account' },
          { title: 'Verify Your Account', link: '/verify-account' },
          { title: 'Recover Your Friendbook Account', link: '/recover-account' },
          { title: 'Control Ad Preferences', link: '/control-ads' },
          { title: 'Set Up Two-Factor Authentication', link: '/setup-2fa' },
        ],
    },
  ];

  constructor(private route: ActivatedRoute) {
    const projectName = this.route.snapshot.paramMap.get('projectName');   
    this.project = this.projects.find((p) => p.name === projectName);
  }

}
