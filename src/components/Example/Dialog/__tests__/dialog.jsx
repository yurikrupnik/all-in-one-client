import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Component from '../index';

const {
    test,
    afterEach
} = global;

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const props = {
        isOpen: true,
        handleDialogClose: jest.fn(), // eslint-disable-line
        showInfo: {
            name: 'asd',
            image: {
                medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/170/426759.jpg',
                original: 'http://static.tvmaze.com/uploads/images/original_untouched/170/426759.jpg'
            },
            officialSite: 'http://www.hbo.com/oz/',
            summary: "<p><b>Z Nation</b> starts three years after the zombie virus has gutted the country, a team of everyday heroes must transport the only known survivor of the plague from New York to California, where the last functioning viral lab waits for his blood. Although the antibodies he carries are the world's last, best hope for a vaccine, he hides a dark secret that threatens them all. With humankind's survival at stake, the ragtag band embarks on a journey of survival across three thousand miles of rusted-out post-apocalyptic America.</p>",
            _embedded: {
                cast: [
                    {
                        character: {
                            name: 'sd',
                            image: {
                                medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/169/424470.jpg',
                                original: 'http://static.tvmaze.com/uploads/images/original_untouched/169/424470.jpg'
                            }
                        },
                        person: {
                            name: 'adf'
                        },
                    }
                ]
            }
        }
    };
    const propsNoSummary = {
        isOpen: true,
        handleDialogClose: jest.fn(), // eslint-disable-line
        showInfo: {
            name: 'asd',
            image: {
                medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/170/426759.jpg',
                original: 'http://static.tvmaze.com/uploads/images/original_untouched/170/426759.jpg'
            },
            officialSite: 'http://www.hbo.com/oz/',
            _embedded: {
                cast: [
                    {
                        character: {
                            name: 'sd',
                            image: {
                                medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/169/424470.jpg',
                                original: 'http://static.tvmaze.com/uploads/images/original_untouched/169/424470.jpg'
                            }
                        },
                        person: {
                            name: 'adf'
                        },
                    }
                ]
            }
        }
    };
    render(<Component {...props} />);
    render(<Component {...propsNoSummary} />);
});
