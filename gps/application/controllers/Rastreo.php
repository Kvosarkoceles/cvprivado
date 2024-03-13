<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Rastreo extends CI_Controller
{

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */




	public function __construct()
	{
		parent::__construct();
	}


	public function index()
	{
		$this->load->view('/rastreo/layouts/header');
		$this->load->view('/rastreo/layouts/aside');
		$this->load->view('/rastreo/mapa');
		$this->load->view('/rastreo/layouts/footer');
	}

	public function report()
	{
		$this->load->view('/rastreo/layouts/dasboard/layouts/header');
		$this->load->view('/rastreo/layouts/dasboard/layouts/aside');
		$this->load->view('/rastreo/layouts/dasboard/tabla');
		$this->load->view('/rastreo/layouts/dasboard/layouts/footer');
		
	}

	public function mapa()
	{
		// $this->load->view('/rastreo/layouts/dasboard/layouts/header');
		// $this->load->view('/rastreo/layouts/dasboard/layouts/aside');
		// $this->load->view('/rastreo/layouts/dasboard/mapa');
		// $this->load->view('/rastreo/layouts/dasboard/layouts/footer');

		$this->load->view('/rastreo/layouts/dasboard/mapa2');
	}
	
}
