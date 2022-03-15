<div class="container mx-auto home-intro">
	<div class="flex flex-wrap justify-center">
		<div class="lg:w-2/3 pr-4 pl-4 :flex-growlg-offset-2">
			<div class="pb-4">
				<slot name="icon" />
			</div>

			<slot name="title" />
			<div class="description">
				<slot name="description" />
			</div>
		</div>
	</div>
</div>
