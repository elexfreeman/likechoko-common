export namespace ReceiptR {
  export namespace receiptAdd {
    export const route = '/receipt/add';
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

  export namespace receiptSave {
    export const route = '/receipt/save';
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
