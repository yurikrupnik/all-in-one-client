import moxios from 'moxios';
import api from '../api';

const {
    describe, test
} = global;

describe('currency api', () => {
    describe('fetch', () => {
        test('should fetch success', (done) => {
            moxios.withMock(() => {
                api.fetch({});
                moxios.wait(() => {
                    const request = moxios.requests.mostRecent();
                    request.respondWith({
                        status: 200,
                        data: [
                            {
                                score: 14.926051,
                                show: {
                                    id: '123',
                                    name: 'asd'
                                }
                            }
                        ]
                    });
                    done();
                });
            });
        });


        test('should fetch fail', (done) => {
            moxios.withMock(() => {
                api.fetch({});
                moxios.wait(() => {
                    const request = moxios.requests.mostRecent();
                    request.respondWith({
                        status: 500,
                        data: new Error('as')
                    });
                    done();
                });
            });
        });
    });

    describe('getSelected', () => {
        test('should getSelected success', (done) => {
            moxios.withMock(() => {
                api.getSelected(748);
                moxios.wait(() => {
                    const request = moxios.requests.mostRecent();
                    request.respondWith({
                        status: 200,
                        data: {
                            id: 748,
                            url: 'http://www.hbo.com/oz/',
                            name: 'Oz',
                            _embedded: {
                                cast: []
                            }
                        }
                    });
                    done();
                });
            });
        });


        test('should getSelected fail', (done) => {
            moxios.withMock(() => {
                api.getSelected('11904d');
                moxios.wait(() => {
                    const request = moxios.requests.mostRecent();
                    request.respondWith({
                        status: 500,
                        data: new Error('as')
                    });
                    done();
                });
            });
        });
    });
    describe('getSelected', () => {
        test('should getSelected success', () => {
            api.provider();
        });
    });
});
