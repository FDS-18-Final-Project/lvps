/* eslint-disable import/no-anonymous-default-export */
import SearchForm from './SearchForm';

export default {
  title: 'MMAuto/Component/SearchForm',
  component: SearchForm,
  parameters: {
    docs: {
      description: {
        component: 'Header 에서 사용하는 SearchForm 컴포넌트입니다.'
      }
    }
  }
};

//template 만들기
const Template = args => <SearchForm {...args}></SearchForm>;

//스토리 구성 객체 기본 내보내기
export const defaultSearchForm = Template.bind({});
