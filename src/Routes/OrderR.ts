/**
 * Заказ
 */
export namespace OrderR {
  export namespace makeOrder {
    export const route = '/order/make_order';
    export interface RequestI {
      city: string;
      delivery_address: string;
      comment: string;
      delivery_date: string;
      delivery_time_comment: string;
      aProduct: {
        product_id: number;
        count: number;
      }[];
    }

    export interface ResponseI {
      order_id: number; // заказ
    }
  }
}
