import "../../styles/Desktop/Historial.css";

export const HistorialCard = (props) => {
  const titles = [
    "WOW! NEW PAYMENT 🤩",
    "WOW! JOB COMPLETED 🤩",
    "WOW! JOB IN PROGRESS ⚔️",
  ];
  const selectorClass = [
    "h_card_wow_title",
    "h_card_wow_title_job",
    "h_card_wow_title_job_in_progress",
  ];
  const selector = props.selector;

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
          <p className="h_card_wow_status">{props.status}</p>
        </div>
      </div>
    </>
  );
};
