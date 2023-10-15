import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="PaymentIntent" source="paymentIntent" />
        <BooleanField label="PaymentStatus" source="paymentStatus" />
        <TextField label="price" source="price" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Product"
          target="orderId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Colors" source="colors" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Desription" source="desription" />
            <TextField label="DiscountedPrice" source="discountedPrice" />
            <TextField label="ID" source="id" />
            <TextField label="Images" source="images" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <TextField label="TitlePrice" source="titlePrice" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Variants" source="variants" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
