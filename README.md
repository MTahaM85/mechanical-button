# mechanical-button
Experience the REAL and MECHANICAL button!
# Showcase
<style>
  .btn {
    position: relative;
    font-size: xx-large;
    color: white;
    background-color: rgb(47, 85, 87);
    padding: 0;
    border: none;
    border-radius: 20px;
    outline-offset: 4px;
}

.btn-top {
    display: block;
    padding: 10px 30px;
    background-color: cadetblue;
    border-radius: 20px;
    transform: translateY(-5px);
    transition: 0.1s ease;
    user-select: none;
    
}

.btn-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 0%, 0.23);
    border-radius: 20px;
    transform: translateY(5px);
    transition: 0.1s ease;
}

.btn:active .btn-top{
    transform: translateY(-1px);
}

.btn:active .btn-shadow{
    transform: translateY(2px);

</style>
<button type="button" class="btn">Push</button>
