<!-- navbar -->
<script>
  import SignupTypeCard from "../../../components/SignupTypeCard.svelte";
  import AccountSignupNav from "../../../components/AccountSignupNav.svelte";

  let businessSrc = "/assets/icons/small-business.png";
  let employeeSrc = "/assets/icons/employee.png";
</script>

<AccountSignupNav />

<div class="flex mt-36 justify-center">
  <div class="flex flex-col max-w-[438px] h-full mr-16 mt-24">
    <h1 class="font-bold mb-[20px] text-6xl text-turquoise-alternate">Let's make work easier</h1>
    <p class="text-lg text-turquoise">How will you be using Homebase2.0?</p>
  </div>
  <div class="ml-16 max-w-[550px]">
    <SignupTypeCard src={businessSrc} href="/account/sign-up/business-account" primaryText="Do you own or manage a business?" secondaryText="Set up a new business" />
    <SignupTypeCard src={employeeSrc} href="/employee-account" primaryText="Are you an employee joining a team?" secondaryText="Join an existing team" />
  </div>
</div>
