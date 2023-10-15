import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Review"
          target="productId"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
