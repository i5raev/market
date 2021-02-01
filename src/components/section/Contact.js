import React, { Component } from "react";
import { DataContext } from "../Context";
import "../css/Contact.css";

function send(params) {
    alert("Ваше сообщение отправлено");
}
export class Contact extends Component {
    static contextType = DataContext;

    render() {
        return (
            <div className="container pt-5">
                <div className="d-flex justify-content-around">
                    <div>
                        <h5>Мы находимся по адресу:</h5>
                        <span>Г.Бишкек Улица Льва Толстого 148</span>
                    </div>
                    <div>
                        <h5>Контакты:</h5>
                        <span>0505050505</span> <br />
                        <span>0707070707</span>
                    </div>
                </div>
                <div id="inputArea" className="pt-5">
                    <h3 className="container text-center">
                        Напишите нам и мы обязательно с вами свяжемся
                    </h3>
                    <form action="" class="postcard">
                        <div class="form-row">
                            <label for="name">Ваше имя</label>
                            <input type="text" id="name" required />
                        </div>
                        <div class="form-row">
                            <label for="email">Ваш Email</label>
                            <input type="email" id="email" required />
                        </div>
                        <div class="form-row">
                            <label for="message">Ваше сообщение</label>
                            <textarea rows="5" id="message" required></textarea>
                        </div>
                        <div class="form-row">
                            <input
                                type="submit"
                                value="Отправить сообщение"
                                onClick={send}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
