import "../../styles/Desktop/Historial.css";

export const HistorialCard = (props) => {
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

  const statusPayments = ["Pending", "Paid"];

  const selector = props.selector;
  const paymentSelect = props.selectorPayments;

  return (
    <>
      <div className="h_card">
        <div>
          <img src="/Historial/Money.svg" alt="money" className="h_img" />
          <p
            className={selectorClass[selector]}
            // selector === 0 ? "h_card_wow_title" : "h_card_wow_title_job"
          >
            {titles[selector]}
          </p>
          <p className="h_card_wow_name">{props.name}</p>
          <p className="h_card_wow_p">Powerleveling</p>
          <p className="h_card_wow_order">Order</p>
          <p className="h_card_wow_n_order">{props.norder}</p>
          <p className="h_card_wow_payment_request">Payment Request</p>
          <p className="h_card_wow_payment_request_date">{props.date}</p>
          <p className="h_card_wow_deadline">Deadline</p>
          <p className="h_card_wow_deadline_t">{props.deadline}</p>
          <p className="h_card_wow_payment_type">Payment Type</p>
          <p className="h_card_wow_payment_type_type">{props.payment}</p>
          <p className="h_card_wow_amount">${props.amount}</p>
          <p className={selectorPayments[paymentSelect]}>
            {statusPayments[paymentSelect]}
          </p>
        </div>
      </div>
    </>
  );
};
