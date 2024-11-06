import IconSearch from "./icons/IconSearch";

import Input from "./Input";

import InputWithIconContainer from "./InputWithIconContainer";

const Search = () => {
  return (
    <InputWithIconContainer icon={<IconSearch />}>
      <Input
        type='search'
        placeholder='Search'
        className='rounded-0.75rem border-neutral-100 !bg-neutral-100'
      />
    </InputWithIconContainer>
  );
};

export default Search;
