// import { useState } from "react";
import profile from "../assets/user-solid.svg";

function About() {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <img
                    src={profile}
                    alt="Passport size photo"
                    className="aspect-square h-full w-50 rounded-full border-2 border-gray-800 object-cover object-top"
                />
                <h1 className="mt-4 text-4xl font-bold text-black">
                    {" "}
                    Viswajith S
                </h1>
            </div>
            <br />

            <h1 className="text-4xl font-bold text-black mb-3">About</h1>
            <p className="block w-[100ch] mx-auto text-center text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                labore, excepturi vitae veritatis hic commodi cum alias quos
                officia temporibus, doloribus sapiente esse omnis nam eius
                provident maiores. Doloribus ratione minima quo itaque, vel
                omnis aut, rerum ipsam repellendus ipsa blanditiis minus natus
                perferendis laborum hic sequi sunt! Totam sequi iure adipisci
                exercitationem voluptatum, eum voluptates iste ullam ducimus
                dignissimos? Incidunt rerum ullam, nesciunt eos voluptatum nam
                commodi, id nulla obcaecati minima quia neque quibusdam
                similique pariatur magnam explicabo rem eum reiciendis quaerat
                quisquam. Et, dignissimos at minima totam ratione perspiciatis
                repellat soluta iure iusto inventore nostrum tempore adipisci,
                voluptate sit veniam iste sunt voluptatibus quos cupiditate
                voluptas natus consequatur rem deserunt magni? Et dolor a soluta
                eligendi quam distinctio eveniet corrupti atque. Quia corporis
                sequi nostrum veniam non, magnam fugiat voluptatem dolores velit
                ducimus dolore aut voluptas quam quis mollitia, obcaecati
                perferendis, similique totam repudiandae officia nam quos? Quasi
                consequuntur voluptatem tempora maiores eos recusandae
                voluptatum nulla expedita! Doloremque nihil sequi ab quae quo,
                harum ducimus mollitia facere id culpa consectetur, voluptatibus
                minima tempora, quaerat esse animi reprehenderit eos reiciendis
                pariatur dolorum adipisci nesciunt? Illum voluptatum et placeat
                quaerat consectetur aperiam. Nam reiciendis, sapiente amet
                aliquam ipsam architecto minima.
            </p>
        </section>
    );
}
export default About;
