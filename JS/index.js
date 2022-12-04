const comp_image = document.querySelector('.computer_image img');
const player_image = document.querySelector('.player_image img');
const option = document.querySelectorAll('.btns button');




option.forEach((option) => {
    option.addEventListener('click', () => {
        comp_image.classList.add('shake_computerImage');
        player_image.classList.add('shake_playerImage');


        setTimeout(() => {
            comp_image.classList.remove('shake_computerImage');
            player_image.classList.remove('shake_playerImage');

            player_image.src = './images/' + option.id + '.png';

            const choice = ['computer_rock_image', 'computer_paper_image', 'computer_scissor_image'];
            let arrNo = Math.floor(Math.random() * 3);
            let comp_Choice = choice[arrNo];
            console.log(comp_Choice);

            comp_image.src = './images/' + comp_Choice + '.png';

            let computer_points = parseInt(document.querySelector('#computer_points').innerHTML);
            let player_points = parseInt(document.querySelector('#player_points').innerHTML);

            if(option.id ==='player_rock_image'){
                if(comp_Choice === 'computer_paper_image'){
                    document.querySelector('#computer_points').innerHTML = computer_points + 1;
                }else if(comp_Choice === 'computer_scissor_image'){
                    document.querySelector('#player_points').innerHTML = player_points + 1;
                }
            }else if(option.id === 'player_paper_image'){
                   if(comp_Choice === 'computer_scissor_image'){
                    document.querySelector('#computer_points').innerHTML = computer_points + 1;
                   }else if(comp_Choice === 'computer_rock_image'){
                    document.querySelector('#player_points').innerHTML = player_points + 1;
                   }
            }else{
                if(comp_Choice === 'computer_paper_image'){
                    document.querySelector('#player_points').innerHTML = player_points + 1;
                }else if(comp_Choice === 'computer_rock_image'){
                    document.querySelector('#computer_points').innerHTML = computer_points + 1;
                }
            }

            }, 900)
    })
});