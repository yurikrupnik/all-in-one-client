import React from 'react';
// import angular from 'angular';
import template from './template.html';
import { useSelect, useChange } from '../../dataHelpers';
import api from '../../api/movies/api';

const app = angular.module('myApp', ['ngMaterial']); // eslint-disable-line

app.factory('selectedShow', () => {
    let selected = {};
    return {
        getSelected() {
            return selected;
        },
        setSelected(val) {
            selected = val;
        }
    };
});

app.controller('modalCtrl', ($scope, selectedShow) => {
    $scope.selected = selectedShow.getSelected();
});


app.controller('ctrlWithoutService', ($scope, $mdDialog, selectedShow) => {
    $scope.data = [];
    $scope.search = '';

    function setData(response) {
        $scope.data = response;
    }

    function showAdvanced(ev) {
        $mdDialog.show({
            controller: 'modalCtrl',
            template: '<div>show id {{selected.id}}, name {{selected.name}}</div>',
            parent: angular.element(global.document.body), // eslint-disable-line
            targetEvent: ev,
            clickOutsideToClose: true
        });
    }

    // function handleSelected(res) {
    //     selectedShow.setSelected(res);
    //     showAdvanced();
    // }
    // angular passes the value with ng-change
    $scope.handleChange = useChange(null, setData, api.fetch);
    $scope.handleSelect = useSelect(
        api.getSelected, null, selectedShow.setSelected, showAdvanced
    );

    // $scope.handleChange = function (value) {
    //     api.fetch(value)
    //         .then(setData);
    // };

    // $scope.handleSelect = (e) => {
    //     const { dataset } = e.currentTarget;
    //     const { id } = dataset;
    //     api.getSelected(id)
    //         .then((res) => {
    //             selectedShow.setSelected(res);
    //             showAdvanced(e);
    //         });
    // };

    // also does not fix the bug
    // $scope.$watch('search', function (newVal, oldValue) {
    //     // console.log('v', v);
    //     // console.log('a', a);
    //     api.fetch(newVal)
    //         .then((res) => {
    //             $scope.data = res;
    //         });
    // });
});

app.directive('angularView', () => ({
    restrict: 'E',
    controller: 'ctrlWithoutService',
    template
}));

class AngularView extends React.Component {
    constructor(props) {
        super(props);
        this.html = '<div><angular-view/></div>';
    }

    componentDidMount() {
        angular.bootstrap(this.container, ['myApp']);  // eslint-disable-line
    }

    render() {
        return (
            <div
                ref={(c) => this.container = c}  // eslint-disable-line
                dangerouslySetInnerHTML={{ __html: this.html }}  // eslint-disable-line
            />
        );
    }
}

export default AngularView;
