'use strict';
const formDonate = document.getElementById('form-donate');
const btnFacebook = document.getElementById('btn-facebook');
const modalSignIn = document.getElementById('modal-sign-in');
const modalSignInOverlay = document.getElementById('modal-sign-in-overlay');

formDonate.addEventListener('submit', e => {
  modalSignInOverlay.classList.add('shown');  
  e.preventDefault();
});

modalSignIn.addEventListener('click', e => {
  e.stopPropagation();
});

modalSignInOverlay.addEventListener('click', () => {
  modalSignInOverlay.classList.remove('shown');
});

btnFacebook.addEventListener('click', () => {
  formDonate.submit();
});

const bundles = document.querySelectorAll('.bundle');
Array.from(bundles).forEach(bundle => {
  bundle.addEventListener('click', () => {
    Array.from(bundles).forEach(bundle => {
      bundle.classList.remove('selected');
    });

    bundle.classList.add('selected');

    const bundleInfo = {
      mouths: parseInt(bundle.dataset.mouths),
      credits: bundle.dataset.credits
    };

    updateMotivationalMessage(bundleInfo);
  });
});

function updateMotivationalMessage(bundleInfo) {
  const motivationalMessagePara = document.querySelector('.motivational-message p');
  while (motivationalMessagePara.hasChildNodes()) {
    motivationalMessagePara.removeChild(motivationalMessagePara.lastChild);
  }

  if (!bundleInfo) {
    motivationalMessagePara.appendChild(document.createTextNode('Select a bundle from above.'));
  } else {
    motivationalMessagePara.appendChild(document.createTextNode(`You'll get ${bundleInfo.credits} in Boxed credits with this bundle.`));
    motivationalMessagePara.appendChild(document.createElement('br'));
    motivationalMessagePara.appendChild(document.createTextNode(`With this bundle, ${bundleInfo.mouths} hungry mouths will be fed.`));
  }
}

updateMotivationalMessage();
