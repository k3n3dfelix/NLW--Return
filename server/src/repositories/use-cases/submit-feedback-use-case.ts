import { MailAdapter } from "./../../adapters/mail-adapter";
import { FeedbacksRepository } from "./../feedbacks-repository";

interface SubmitFeedbackUSeCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepository;
  private mailAdapter: MailAdapter;

  constructor(
    feedbacksRepository: FeedbacksRepository,
    mailAdapter: MailAdapter
  ) {
    this.feedbacksRepository = feedbacksRepository;
    this.mailAdapter = mailAdapter;
  }
  
  async execute(request: SubmitFeedbackUSeCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}"` : null,
        `</div>`,
      ].join(""),
    });
  }
}
