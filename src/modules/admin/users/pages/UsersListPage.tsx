import Actions from "@/components/Actions";

import Box from "@/components/Box";

import IconBasket from "@/components/icons/IconBasket";

import IconCalender from "@/components/icons/IconCalender";

import IconEmail from "@/components/icons/IconEmail";

import ImageAndName from "@/components/ImageAndName";

import ListTitle from "@/components/ListTitle";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import Status from "@/components/Status";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutFlexContent,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import {fakeDataUsers} from "@/fakeData";

import dayjs from "dayjs";

export const Component = () => {
  return (
    <TransitionPage>
      <Title>User Management</Title>

      <Box>
        <ListTitle title='List of Users' />
        <TableBoxedLayoutContainer className='mt-1.25rem'>
          <TableBoxedLayoutTBody>
            {fakeDataUsers.map((user) => (
              <TableBoxedLayoutTR key={user.id}>
                <TableBoxedLayoutTD>
                  <ImageAndName image={user.photo} name={user.name} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <TableBoxedLayoutFlexContent>
                    <IconBasket />
                    Subscribed
                  </TableBoxedLayoutFlexContent>
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <TableBoxedLayoutFlexContent>
                    <IconEmail />
                    {user.email}
                  </TableBoxedLayoutFlexContent>
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <TableBoxedLayoutFlexContent>
                    <IconCalender />
                    {dayjs().format("DD MMMM, YYYY")}
                  </TableBoxedLayoutFlexContent>
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Status status={user.status} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Actions data={user} />
                </TableBoxedLayoutTD>
              </TableBoxedLayoutTR>
            ))}
          </TableBoxedLayoutTBody>
        </TableBoxedLayoutContainer>
        <div className='mt-1.75rem flex items-center justify-between'>
          <Pagination totalPages={5} />
          <PageLimit />
        </div>
      </Box>
    </TransitionPage>
  );
};

Component.displayName = "UsersListPage";
