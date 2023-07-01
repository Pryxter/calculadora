import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase";

export const HistorialJobCard = (props) => {
  const titles = [
    "WOW! NEW PAYMENT 🤩",
    "WOW! JOB COMPLETED 🤩",
    "WOW! JOB IN PROGRESS ⚔️",
    "WOW! PAYMENT COMPLETED 💵",
  ];
  const selectorClass = [
    "h_card_wow_title",
    "h_card_wow_title_job",
    "h_card_wow_title_job_in_progress",
    "h_card_wow_title_payment_completed",
  ];

  const selectorPayments = [
    "h_card_wow_payment_pending",
    "h_card_wow_payment_paid",
  ];

  const statusPayments = ["Pending", "Done"];

  const selector = props.selector;
  const paymentSelect = props.selectorPayments;

  return (
    <>
      <div className="h_card">
        <div>
          <img
            src={`/Historial/${props.urlIcon}`}
            alt="money"
            className="h_img"
          />
          <p
            className={selectorClass[selector]}
            // selector === 0 ? "h_card_wow_title" : "h_card_wow_title_job"
          >
            {titles[selector]}
          </p>
          <p className="h_card_wow_name">Level: {props.nivel}</p>
          <p className="h_card_wow_p">Powerleveling</p>
          <p className="h_card_wow_order">Order</p>
          <p className="h_card_wow_n_order">{props.norder}</p>
          <p className="h_card_wow_payment_request">Client</p>
          <p className="h_card_wow_payment_request_date">{props.client}</p>
          <p className="h_card_wow_deadline">Work Date</p>
          <p className="h_card_wow_deadline_t">{props.date}</p>
          <p className="h_card_wow_payment_type">Mate</p>
          <p className="h_card_wow_payment_type_type">{props.mate}</p>
          <p className="h_card_wow_amount">${props.amount}</p>
          <p className={selectorPayments[paymentSelect]}>
            {statusPayments[paymentSelect]}
          </p>
        </div>
      </div>
    </>
  );
};
